export interface Collection {
  elapsedMilliseconds: number;
  count: number;
  countFacets: {
    hasimage: number;
    ondisplay: number;
  };
  artObjects: [
    {
      links: {
        self: string;
        web: string;
      };
      id: string;
      objectNumber: string;
      title: string;
      hasImage: boolean;
      principalOrFirstMaker: string;
      longTitle: string;
      showImage: boolean;
      permitDownload: boolean;
      webImage: {
        guid: any;
        offsetPercentageX: number;
        offsetPercentageY: number;
        width: number;
        height: number;
        url: string;
      };
      headerImage: {
        guid: any;
        offsetPercentageX: number;
        offsetPercentageY: number;
        width: number;
        height: number;
        url: string;
      };
      productionPlaces: Array<any>;
    }
  ];
  facets: Array<any>;
}
