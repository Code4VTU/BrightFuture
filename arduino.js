#include <JsonArray.h>
#include <JsonHashTable.h>
#include <JsonObjectBase.h>
#include <JsonParser.h>
#include <Bridge.h>
#include <HttpClient.h>
#include <Servo.h>

HttpClient client;

Servo frontDoor;
Servo garageDoor;

int lightLeft = 11;
int lightRight = 10;
int lightRoom = 9;
int lightGarage = 8;
int servoDoor = 7;
int servoGarage = 6;

bool asyncdemo = false;

void setup() {
  // Bridge takes about two seconds to start up
  // it can be helpful to use the on-board LED
  // as an indicator for when it has initialized
  Bridge.begin();
  
  client.setTimeout(2000);
  
  pinMode(lightLeft, OUTPUT);
  pinMode(lightRight, OUTPUT);
  pinMode(lightRoom, OUTPUT);
  pinMode(lightGarage, OUTPUT);
  
  blink(300, 5);
  
  frontDoor.attach(servoDoor);
  garageDoor.attach(servoGarage); 

  reset();
  
}