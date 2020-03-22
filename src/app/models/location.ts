
  export interface Address {
    street: string;
    streetNumber: number;
    zip: string;
    town: string;
  }

  export interface RootDirectories {
  }

  export interface FileStores {
  }

  export interface UserPrincipalLookupService {
  }

  export interface FileSystem {
    rootDirectories: RootDirectories;
    fileStores: FileStores;
    userPrincipalLookupService: UserPrincipalLookupService;
    separator: string;
    readOnly: boolean;
    open: boolean;
  }

  export interface PathToFile {
    absolute: boolean;
    fileSystem: FileSystem;
    nameCount: number;
  }

  export interface Asset {
    pathToFile: PathToFile;
    originalName: string;
    suffix: string;
  }

  export interface Location {
    id: string;
    name: string;
    address: Address;
    assets: Asset[];
  }


