import estuches from "../data/estuches.json"
import modelos from "../data/modelos.json"



export const getDummyData = () => {
    const { objects: estuchesArray } = estuches;
    const { objects: modelosArray } = modelos;

    return {estuchesArray, modelosArray}
}
