#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <math.h>
#include <unistd.h>
#include <pthread.h>
#include <semaphore.h>

#include "defs.h"

Building* createBuilding() {
  // Allocate memory for the building
  Building* building = malloc(sizeof(Building));

  // Set the initial values for the building
  building->ghost = NULL;
  building->hunters = NULL;
  building->rooms = NULL;

  return building;
}

void populateBuilding(Building* building) {
  // Create the Van room and add it to the building
  Room* van = createRoom("Van");
  addRoom(building, van);

  // Create the other rooms in the building and add them to the building
  Room* hallway = createRoom("Hallway");
  addRoom(building, hallway);
  Room* diningRoom = createRoom("Dining Room");
  addRoom(building, diningRoom);
  Room* kitchen = createRoom("Kitchen");
  addRoom(building, kitchen);
  Room* livingRoom = createRoom("Living Room");
  addRoom(building, livingRoom);
  Room* basement = createRoom("Basement");
  addRoom(building, basement);
  Room* bathroom = createRoom("Bathroom");
  addRoom(building, bathroom);
  Room* bedroom = createRoom("Bedroom");
  addRoom(building, bedroom);
  Room* closet = createRoom("Closet");
  addRoom(building, closet);
  Room* attic = createRoom("Attic");
  addRoom(building, attic);

  // Connect the rooms together
  connectRooms(van, hallway);
  connectRooms(hallway, diningRoom);
  connectRooms(hallway, kitchen);
  connectRooms(hallway, livingRoom);
  connectRooms(hallway, basement);
  connectRooms(basement, bathroom);
  connectRooms(basement, bedroom);
  connectRooms(bedroom, closet);
  connectRooms(closet, attic);
}

void cleanupBuilding(Building* building) {
  // Free the memory for each room in the building
  RoomNode* roomNode = building->rooms;
  while (roomNode != NULL) {
    Room* room = roomNode->room;
    freeRoom(room);
    roomNode = roomNode->next;
  }

  // Free the memory for the ghost
  if (building->ghost != NULL) {
    freeGhost(building->ghost);
  }

// Free the memory for each hunter in the building
HunterNode* hunterNode = building->hunters;
while (hunterNode != NULL) {
Hunter* hunter = hunterNode->hunter;
freeHunter(hunter);
hunterNode = hunterNode->next;
}

// Free the memory for the building
free(building);
}

void addRoom(Building* building, Room* room) {
  // Create a new room node
  RoomNode* roomNode = malloc(sizeof(RoomNode));
  roomNode->room = room;
  roomNode->next = NULL;

  // Add the room node to the building
  if (building->rooms == NULL) {
    building->rooms = roomNode;
  } else {
    RoomNode* lastRoomNode = building->rooms;
    while (lastRoomNode->next != NULL) {
      lastRoomNode = lastRoomNode->next;
    }
    lastRoomNode->next = roomNode;
  }
}

void connectRooms(Room* room1, Room* room2) {
  // Create a new room connection
  RoomConnection* roomConnection = malloc(sizeof(RoomConnection));
  roomConnection->room = room2;
  roomConnection->next = NULL;

  // Add the room connection to the first room
  if (room1->connections == NULL) {
    room1->connections = roomConnection;
  } else {
    RoomConnection* lastRoomConnection = room1->connections;
    while (lastRoomConnection->next != NULL) {
      lastRoomConnection = lastRoomConnection->next;
    }
    lastRoomConnection->next = roomConnection;
  }

  // Create a new room connection
  roomConnection = malloc(sizeof(RoomConnection));
  roomConnection->room = room1;
  roomConnection->next = NULL;

  // Add the room connection to the second room
  if (room2->connections == NULL) {
    room2->connections = roomConnection;
  } else {
    RoomConnection* lastRoomConnection = room2->connections;
    while (lastRoomConnection->next != NULL) {
      lastRoomConnection = lastRoomConnection->next;
    }
    lastRoomConnection->next = roomConnection;
  }
}

Room* getRandomRoom(Building* building) {
  // Get the number of rooms in the building
  int numRooms = 0;
  RoomNode* roomNode = building->rooms;
  while (roomNode != NULL) {
    numRooms++;
    roomNode = roomNode->next;
  }

  // Get a random room
  int randomRoomIndex = rand() % numRooms;
  roomNode = building->rooms;
  for (int i = 0; i < randomRoomIndex; i++) {
    roomNode = roomNode->next;
  }

  return roomNode->room;
}

