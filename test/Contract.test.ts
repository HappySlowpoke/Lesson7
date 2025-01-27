import { UserEstonia } from "../src/UserEstonia";
import { UserLatvia } from "../src/UserLatvia";
import { Contract } from "../src/Contract";

describe("Contract tests", () => {
  let estonianNoActivation: UserEstonia;
  let estonianContract: Contract;
  let estonianWithActivation: UserEstonia;
  let latvianNoActivation: UserLatvia;
  let latvianWithActivation: UserLatvia;
  let latvianContract: Contract;

  beforeEach(() => {
    estonianNoActivation = new UserEstonia("Yakob", "Lvovich", 24);
    estonianWithActivation = new UserEstonia("Yakob", "Lvovich", 15);
    latvianNoActivation = new UserLatvia("Petr", "Ivanov", 28);
    latvianWithActivation = new UserLatvia("Vasya", "Pupkin", 17);
    estonianContract = new Contract("Burning planes EST");
    latvianContract = new Contract("Burning Planes LAT");
  });

  test("ESTONIA: Verify that the contract can not be signed if Mobile ID is not active", () => {
    estonianContract.signEST(estonianNoActivation);
    expect(estonianContract.signed).toBeFalsy();
  });

  test("ESTONIA: Verify that after activating Mobile ID authorization, the contract can be successfully signed, and the contract status changes to signed: true.", () => {
    estonianWithActivation.mobileIDAuthorization = true;
    estonianContract.signEST(estonianWithActivation);
    expect(estonianContract.signed).toBeTruthy();
  });

  test("LATVIA: Verify that the contract can not be signed if Mobile ID is not active", () => {
    latvianContract.signLAT(latvianNoActivation);
    expect(latvianContract.signed).toBeFalsy();
  });

  test("LATVIA: Verify that after activating Mobile ID authorization, the contract can be successfully signed, and the contract status changes to signed: true.", () => {
    latvianWithActivation.activateEParakstsForLatvia = true;
    latvianContract.signLAT(latvianWithActivation);
    expect(latvianContract.signed).toBeTruthy();
  });
});
