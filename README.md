## README

![wireframe](/assets/wireframe.png)

## ORDER OF OPERATIONS

    • sign up, sign in (redirect to create)
    • CREATE PAGE: adding member to a master class (on submit, redirect to masterclass page)
    • MASTER CLASS PAGE: display master classes with each member
    • MASTER CLASS PAGE: Master class cards show on load
    • MASTER CLASS PAGE: user can delete member on click

## HTML

SEE WIREFRAME

## EVENTS

CREATE PAGE

Form

-   input (INSERT member name into member table)
-   dropdown of master classes (fetch master classes, display them)
-   submit button redirect to master class page

MASTER CLASS PAGE

-   on load (display master class cards with vocal master and members)
-   click to delete member (in supabase)

## FUNCTIONS

-   render in display function (renderVocalMaster() rendermembers())
-   displayMasterclasses()
-   fetchVocalMasters()
-   fetchmembers()
-   deletemember(id)
-   createmember(name, master)

SUPABASE TABLES

vocal_members

columns: id, name, user_id (LINK auth), master_id (LINK vocal_masters)

vocal_masters: id, name
