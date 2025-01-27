import { UserEstonia } from "../src/UserEstonia";
import { UserLatvia } from "../src/UserLatvia";
import { KYC } from "../src/KYC";

export class Contract {
  title: string;
  signed: boolean;

  constructor(title: string) {
    this.title = title;
    this.signed = false;
  }

  signEST(user: UserEstonia): void {
    if (user.mobileIDAuthorization) {
      this.signed = true;
      console.log(`Contract "${this.title}" has been signed.`);
    } else {
      console.log(
        `Failed to sign the contract "${this.title}": Mobile ID is not active.`,
      );
    }
  }

  signLAT(user: UserLatvia): void {
    if (user.activateEParakstsForLatvia) {
      this.signed = true;
      console.log(`Contract "${this.title}" has been signed.`);
    } else {
      console.log(
        `Failed to sign the contract "${this.title}": Mobile ID is not active.`,
      );
    }
  }
}
