const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

exports.sendNotification = async (userToken, message) => {
  await admin.messaging().send({
    token: userToken,
    notification: {
      title: "Price Drop Alert!",
      body: message
    }
  });
};
