import mongoose from "mongoose";

const ProjectDB = "mongodb://localhost/OnlineCoursesDB";

export const DataBaseConnection = async () => {
  try {
    const dbconnect = await mongoose.connect(ProjectDB);
    console.log(`Database is connected to ${dbconnect.connection.host}`);
  } catch (error) {
    console.log("An error occured in connecting to Database", error);
  }
};
