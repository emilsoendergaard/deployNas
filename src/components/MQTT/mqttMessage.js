export default function mqttTest(client, topic, addOilData) {

    ///test/quality/mestskyet/
    client.publish("/test/quality/mestskyet/", "test message")   
    console.log(" sendt: /test/quality/mestskyet/")

    return (null)
    // return client.on("message", (topic, payload) => {
    //   console.log("Received Message:", topic, payload.toString());
    // });
  }
  
