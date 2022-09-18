import { Request, Response } from 'express';


const getTables = async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Tables retrieved",
    });
};

const modifyTable = async (req: Request, res: Response) => {

    return res.status(201).json({
        message: "Table modified",
    });
}

export default {
    getTables,
    modifyTable,
}