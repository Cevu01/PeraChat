import { RNS3 } from "react-native-aws3";

const s3Config = {
  bucket: "audio-files-final",
  region: "us-west-2",
  accessKey: "",
  secretKey: "",
};

export const uploadToS3 = async (uri, fileName) => {
  try {
    const file = {
      uri,
      name: fileName,
      type: "audio/wav",
    };

    const options = {
      keyPrefix: "", // Opcionalno: folder unutar bucket-a
      bucket: s3Config.bucket,
      region: s3Config.region,
      accessKey: s3Config.accessKey,
      secretKey: s3Config.secretKey,
      successActionStatus: 201, // HTTP status uspešnog otpremanja
      acl: "bucket-owner-full-control", // Dodavanje ACL-a
    };

    const response = await RNS3.put(file, options);
    if (response.status !== 201) {
      throw new Error("Neuspešno otpremanje na S3");
    }
    console.log(response.body.postResponse.location);
    alert("Uspešno otpremljeno:", response.body.postResponse.location);
    return response.body.postResponse.location; // URL otpremljenog fajla
  } catch (error) {
    alert("Greška pri otpremanju na S3:", error);
  }
};
