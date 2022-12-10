#include "defs.h"

// Hunter thread function
void* hunter_thread(void* hunter) {
Hunter* hunter_ptr = (Hunter*)hunter;

while (true) {

    if (hunter_ptr->room->ghost != NULL) {
    // Randomly choose action
    int action = rand() % 3;
            // Take evidence
        if (action == 0) {
            Evidence* evidence = hunter_ptr->room->evidence;
            if (evidence != NULL) {
                hunter_ptr->evidence = evidence->type;
                hunter_ptr->room->evidence = evidence->next;
                free(evidence);
            }
        }

        // Move to another room
        else if (action == 1) {
            Room* connections = hunter_ptr->room->connections;
            int num_connections = 0;
            while (connections != NULL) {
                num_connections++;
                connections = connections->next;
            }

            // Choose random room to move to
            int move_index = rand() % num_connections;
            connections = hunter_ptr->room->connections;
            for (int i = 0; i < move_index; i++) {
                connections = connections->next;
            }

            hunter_ptr->room->hunters = NULL;
            hunter_ptr->room = connections;
            hunter_ptr->room->hunters = hunter_ptr;
        }
    }

    // Check if ghost has left the building
    if (building->ghost->room == NULL) {
        break;
    }
}

return NULL;

}