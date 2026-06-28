Here is the diagram:

```mermaid
sequenceDiagram
    participant browser
    participant server


    browser->>browser: Run spa.js and redraw notes

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: JSON response
    deactivate server

    server->>server: update data.json file in server
