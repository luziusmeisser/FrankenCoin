import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
import { ethers } from "hardhat";
import {deployContract} from "../deployUtils";


const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    await deployContract(hre, "ReservePool");
};
export default deploy;
