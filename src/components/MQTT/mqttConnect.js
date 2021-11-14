export default function mqttTest(topic, client) {
  
  console.log("TryToConnectYes")
  
  client.on("connect", () => {
    console.log("Connection ON")
    })
  client.stream.on('error', (err) => {
      console.log('error', err);
      client.end()
  });
    return (null)
}
