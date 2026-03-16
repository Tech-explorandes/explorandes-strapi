const fs = require('fs');
const path = require('path');
const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function importItineraries() {
  const filePath = path.join(__dirname, '..', 'sanity-itineraries.json');
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n').filter(line => line.trim() !== '');

  console.log(`Found ${lines.length} itineraries to import.`);

  for (const line of lines) {
    try {
      const entry = JSON.parse(line);

      // Transform data securely
      const transformedEntry = { ...entry };

      // Map sanity ID and timestamps
      if (transformedEntry.id) {
        transformedEntry.sanityId = transformedEntry.id;
        delete transformedEntry.id;
      }
      if (transformedEntry.createdAt) {
        transformedEntry.createdAtSanity = transformedEntry.createdAt;
        delete transformedEntry.createdAt;
      }
      if (transformedEntry.updatedAt) {
        transformedEntry.updatedAtSanity = transformedEntry.updatedAt;
        delete transformedEntry.updatedAt;
      }

      // Map slugs from object to string
      if (transformedEntry.slug && transformedEntry.slug.current) {
        transformedEntry.slug = transformedEntry.slug.current;
      }
      
      if (transformedEntry.slugES && transformedEntry.slugES.current) {
        transformedEntry.slugES = transformedEntry.slugES.current;
      }

      // Remove unwanted sanities-specific fields
      delete transformedEntry._type;

      // Ensure lists are defined as empty arrays instead of null/undefined
      const ensureArrayParams = [
          'listOfDepartureDates', 'daysActivitiesList', 'imagesByDay', 
          'tipoSalida', 'touristType', 'destinations', 'tags',
          'notIncludedES', 'included', 'whatToTakeES', 'whatToTake',
          'productIds', 'includedES', 'notIncluded'
      ];

      for (const field of ensureArrayParams) {
          if (!transformedEntry[field]) {
              transformedEntry[field] = [];
          }
      }

      // Create entry in Strapi
      const createdEntry = await strapi.documents('api::itinerary.itinerary').create({
        data: transformedEntry,
        status: 'published'
      });
      
      console.log(`✅ Successfully imported itinerary: ${transformedEntry.nombre || transformedEntry.sanityId} (Strapi ID: ${createdEntry.documentId})`);

    } catch (parseError) {
      console.error(`❌ Error importing an itinerary.`, parseError.message);
    }
  }
}

async function main() {
  console.log('Starting Strapi instance for import...');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'error';

  console.log('Instance ready. Starting import process...');
  await importItineraries();

  console.log('Import process complete. Closing Strapi instance...');
  await app.destroy();
  process.exit(0);
}

main().catch((error) => {
  console.error('Fatal error during import:', error);
  process.exit(1);
});
