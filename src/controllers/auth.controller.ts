import { Request, Response } from "express";
import axios from "axios";

const MICROSERVICE_AUTH_URL = "http://localhost:9001";

export const apiAuth = async (req: Request, res: Response) => {
  console.log("body:", req.body);
  try {
    try {
      // Make the API call using Axios
      const response = await axios.post(
        MICROSERVICE_AUTH_URL + "/ping",
        req.body
      );
      const data = response.data;
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(503).json({ error: "Authentication Service Unavailable" });
    }
  } catch (error) {
    return res.status(500).send("error");
  }
};
