import { NativeModules } from 'react-native';

type BingMapsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { BingMaps } = NativeModules;

export default BingMaps as BingMapsType;
