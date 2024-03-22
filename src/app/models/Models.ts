export class District {
    id?: number;
    name?: string=""; 
    region?: Region;    
}

export class Region {
    id?: number ;
    name?: string ;
    district?: District[] ;
}


export class Facilitys {
    id?: number;
    code?: string;
    district?: District;
    patients?:Patient[];
  }
  


  export class AgeCategory {
    id?: number;
    label?: string;
    description?: string;
  }

  export class Analysis {
    id?: number;
    startedDate?: Date;
    completedDate?: Date;
    patient?: Patient;
    test?: Test;
    samples?: Sample[];
  }
  
  export class PageVisited {
    id?: number;
    pageUrl?: string;
    visitedCount?: number;
    yearMonth?: number;
    firstVisitedDate?: Date;
    timestamp?: string; // Peut-être définir le type comme string ou Date selon vos besoins
    visitor?: Visitor;
  }


  export class Patient {
    id?: number;
    birthDate?: Date;
    gender?: string;
    identityData?: string;
    upidCode?: string;
    nationalCode?: string;
    facility?: Facilitys;
    analysis?: Analysis[];
  }


  export class Sample {
    id?: number;
    label?: string;
    description?: string;
    sampleType?: SampleType;
    analysis?: Analysis;
  }

  export class SampleType {
    id?: number;
    label?: string;
    description?: string;
  }

  export class Test {
    id?: number;
    date?: Date;
  }
  
  export class Visitor {
    id?: number;
    address?: string;
    year_month?: number;
    visitedCount?: number;
    first_visited_date?: Date;
    last_visited_date?: Date;
    timestamp?: Date;
  }
  