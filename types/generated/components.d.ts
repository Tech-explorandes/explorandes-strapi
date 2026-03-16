import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBannerImage extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_banner_images';
  info: {
    displayName: 'Banner Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.String;
    srcMobile: Schema.Attribute.String;
  };
}

export interface SharedBilingualText extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_bilingual_texts';
  info: {
    displayName: 'Bilingual Text';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionES: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    titleES: Schema.Attribute.String;
  };
}

export interface SharedDayActivity extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_day_activities';
  info: {
    displayName: 'Day Activity';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionES: Schema.Attribute.Text;
    map: Schema.Attribute.String;
    mobilitys: Schema.Attribute.Component<'shared.mobility', true>;
    title: Schema.Attribute.String;
    titleES: Schema.Attribute.String;
  };
}

export interface SharedDepartureDate extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_departure_dates';
  info: {
    displayName: 'Departure Date';
  };
  attributes: {
    date: Schema.Attribute.String;
    idFilePadre: Schema.Attribute.String;
    idsFilesHijos: Schema.Attribute.JSON;
    isOpen: Schema.Attribute.Boolean;
    paxReservations: Schema.Attribute.Integer;
    permitsAvailable: Schema.Attribute.Integer;
    reservations: Schema.Attribute.Integer;
  };
}

export interface SharedImageByDay extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_images_by_day';
  info: {
    displayName: 'Image By Day';
  };
  attributes: {
    day: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    productId: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetaTags extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_meta_tags';
  info: {
    displayName: 'Meta Tags';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionES: Schema.Attribute.Text;
    keywords: Schema.Attribute.JSON;
    keywordsES: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    titleES: Schema.Attribute.String;
  };
}

export interface SharedMobility extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_mobilities';
  info: {
    displayName: 'Mobility';
  };
  attributes: {
    distanceDouble: Schema.Attribute.Decimal;
    distanceLong: Schema.Attribute.Integer;
    time: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedObjCliente extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_obj_clientes';
  info: {
    displayName: 'Objeto Cliente';
  };
  attributes: {
    clienteId: Schema.Attribute.String;
    createdBy: Schema.Attribute.String;
  };
}

export interface SharedPassenger extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_passengers';
  info: {
    displayName: 'Passenger';
  };
  attributes: {
    mas: Schema.Attribute.String;
    max: Schema.Attribute.Integer;
    min: Schema.Attribute.Integer;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeason extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_seasons';
  info: {
    displayName: 'Season';
  };
  attributes: {
    end: Schema.Attribute.String;
    start: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTopBanner extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_top_banners';
  info: {
    displayName: 'Top Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionES: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.banner-image', false>;
    title: Schema.Attribute.String;
    titleES: Schema.Attribute.String;
  };
}

export interface SharedWeeks extends Struct.ComponentSchema {
  collectionName: 'components_itinerary_weeks';
  info: {
    displayName: 'Weeks';
  };
  attributes: {
    first: Schema.Attribute.Boolean;
    fourth: Schema.Attribute.Boolean;
    second: Schema.Attribute.Boolean;
    third: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner-image': SharedBannerImage;
      'shared.bilingual-text': SharedBilingualText;
      'shared.day-activity': SharedDayActivity;
      'shared.departure-date': SharedDepartureDate;
      'shared.image-by-day': SharedImageByDay;
      'shared.media': SharedMedia;
      'shared.meta-tags': SharedMetaTags;
      'shared.mobility': SharedMobility;
      'shared.obj-cliente': SharedObjCliente;
      'shared.passenger': SharedPassenger;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.season': SharedSeason;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.top-banner': SharedTopBanner;
      'shared.weeks': SharedWeeks;
    }
  }
}
