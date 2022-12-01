## README

![wireframe](/assets/wireframe.png)

## ORDER OF OPERATIONS

    • sign up, sign in (redirect to create)
    • CREATE PAGE: adding participant to a master class (on submit, redirect to masterclass page)
    • MASTER CLASS PAGE: display master classes with each participant
    • MASTER CLASS PAGE: Master class cards show on load
    • MASTER CLASS PAGE: user can delete participant on click

## HTML

SEE WIREFRAME

## EVENTS

CREATE PAGE

Form

-   input (INSERT participant name into participant table)
-   dropdown of master classes (fetch master classes, display them)
-   submit button redirect to master class page

MASTER CLASS PAGE

-   on load (display master class cards with vocal master and participants)
-   click to delete participant (in supabase)

## FUNCTIONS

-   render in display function (renderVocalMaster() renderParticipants())
-   displayMasterclasses()
-   fetchVocalMasters()
-   fetchParticipants()
-   deleteParticipant(id)
-   createParticipant(name, master)

SUPABASE TABLES

vocal_participants

columns: id, name, user_id (LINK auth), master_id (LINK vocal_masters)

vocal_masters: id, name
