// import conf from "../conf/conf.js";
// import { Client, Account, ID } from "appwrite";
// import  {nanoid} from "nanoid";

// class AuthService {
//   constructor() {
//     this.client = new Client()
//       .setEndpoint(conf.appwriteUrl)
//       .setProject(conf.appwriteProjectId);

//     this.account = new Account(this.client);
//   }

//   async createAccount({ email, password, name }) {
//     try {
  
//       const userAccount = await this.account.create(ID.unique(), email, password, name);
//       if (userAccount) {
        
//             // Call another function
//         return this.login({ email, password });
//       }
//       return userAccount;
//     } catch (error) {
//       console.error("AuthService :: createAccount :: error", error);
//       throw error;
//     }
//   }
  
//   async getCurrentUser() {
//     try {
//       return await this.account.get();
//     } catch (error) {
//       console.error("AuthService :: getCurrentUser :: error", error);
//       return null;
//     }
//   }

//   async login({ email, password }) {
//     try {
//       return await this.account.createSession(email, password);
//     } catch (error) {
//       console.error("AuthService :: login :: error", error);
//       throw error;
//     }
//   }

//     async logout() {
//     try {
//       return await this.account.deleteSessions();
//     } catch (error) {
//       console.error("AuthService :: logout :: error", error);
//       throw error;
//     }
//   }
// }

// const authService = new AuthService();

// export default authService;


import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // Call another function
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      console.error("AuthService :: createAccount :: error", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("AuthService :: login :: error", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("AuthService :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("AuthService :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
