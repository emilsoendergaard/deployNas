import React, { useEffect } from "react";
import message from "./mqttMessage";
import connect from "./mqttConnect";
import subscribtion from "./mqttSubscribe"
const mqtt = require("mqtt");
const host = "test.mosquitto.org";
const port = "8080";
// const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const connectUrl = `mqtt://${host}:${port}`;
const topic = "/nodejs/scada/mqtt";

const clientDefault = mqtt.connect(connectUrl, {
  clientId: "mqttSndergaard",
  // clean: false,
  // connectTimeout: 4000,
  // username: "",
  // password: "",
  // reconnectPeriod: 1000,
});

export default function ConnectFunc(addISO4406,addOilData, addTempData, addOilCondData, addParticles) {

  const [client, setClient] = React.useState(clientDefault)

    if (!client.connected) // Only connect if not allready connected.
    {
      connect(topic, client)
      console.log("connected flag  " + client.connected);
      console.log("Open messenger   " + client.connected);
      //message(client,topic,addOilData)
      console.log("connected flag  " + client.connected);
      console.log("Client connected: " + client.connected)
      console.log("Subscribe")
      subscribtion(client,addISO4406, addOilData,addTempData,addOilCondData,addParticles)
    }
 

  return (null)
}