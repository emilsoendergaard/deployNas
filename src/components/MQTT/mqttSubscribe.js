const qos = 0;
const topicQuality = '/test/mestsol/quality'
const topicTemperature = '/test/mestsol/temperature'
const topicOilCondition='/test/mestsol/quality'
const topicParticles ='/test/mestsol/particles&bubbles'
const topicISO4406 = '/test/mestsol/iso4406'
const topicFatigue = '/test/mestsol/fatigue'

export default function mqttSub(client,addISO4406,DataOil,DataTemp,addOilCondData,addParticles, addFatigue) {
  if (client) {
    client.subscribe(topicFatigue, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
    });
    client.subscribe(topicQuality, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
    });
    client.subscribe(topicTemperature, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }   
    });
    client.subscribe(topicOilCondition, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
    });
    client.subscribe(topicParticles, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
    });
    client.subscribe(topicISO4406, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
    });

    client.on('message', function (topic, message, packet) {
      // Tjek data kaldes korrect
      var jsonPayload = JSON.parse(message);
      //  debugger
      if(topic===topicFatigue){
        addFatigue(jsonPayload)
      }
      if(topic===topicQuality){ 
        DataOil(jsonPayload);
      }
      if(topic===topicTemperature)
      {
        DataTemp(jsonPayload);
      }
      if(topic===topicOilCondition)
      {
        addOilCondData(jsonPayload)
      }
      if(topic===topicParticles){
        addParticles(jsonPayload)
      }
      if(topic===topicISO4406){
        addISO4406(jsonPayload)
      }
        //Log
        console.log("Topic: " + topic)
        console.log("packet : " + packet)
        console.log("message: " + message)
      
    })
  }
};

