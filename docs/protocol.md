---
sidebar_position: 1
---

# Welcome 👋

This space describes the Earn Keeper Plugin protocol, its intended for developers that would like to integrate to EarnKeeper.io without using our Node.js SDK.&#x20;

If you are using Node.js, we have an SDK to get you started here.

## Introduction

We developed the EarnKeeper protocol to communicate between earnkeeper.io (the client) and one or more plugins (the server).

The protocol is based on Sockets.io, and defines events emitted by both the client and the server.

You can find a detailed specification of each event here.

The protocol also defines:

* a UI schema to allow the plugin to build menus and pages on client
* a Data schema consisting of Layers, Collections and Documents to store data on the client, and be used by the UI schema for display

On this page we will describe the lifecycle of a typical communication between the client and the server.

NOTE the protocol is agnostic to the framework or language used by the plugin, we supply an SDK and example plugins for Node.js using the NestJs framework, depending on demand, we will also consider an SDK and examples for other languages or frameworks.

## Architecture

![Architecture](/img/protocol/4.png)

EarnKeeper.io ships with a list of pre-approved plugins. The user can add more plugins by using their settings page. To add another plugin, the user only requires the hostname of where the plugin is hosted, and accepting socket.io connections.

## LifeCycle

### Socket.io Connect

When the user adds a plugin, the client will initiate a connection to the server, once the connection has been established, the server will emit the UpdateMetadata event, containing metadata such as the pluginId and pluginName.

![](/img/protocol/1.png)

The client will now show the state of the plugin as Connected to the user.

### Client State Changed Event

Once connected, the client will emit a ClientStateChanged event. This event contains information such as the wallets the user is watching, which page they are viewing, the currency they have selected and so on.

The client does not expect a response to this event. The server can process the event and emit further events asynchronously when ready.

A typical plugin will emit an AddLayer event at this point, containing menus and pages to be shown to the user.&#x20;

![](/img/protocol/9.png)

Depending on the page the user is viewing, the server may emit further Add Layer events containing data to be stored at the client and used by the UI.

## Data Schema

The server can emit data to the client at any point once connected. Data is transported to the client using the AddLayersEvent, which contains one or more Layer objects.&#x20;

Each layer is stored in the browser IndexedDb at the client. The client periodically reads all layers from the browser database in order and builds Collections in the browser state from the layers.

Layers allow multiple plugins to interact with the same collections of data at the client. Each layer can overwrite documents in any collection, or patch documents in a collection to only change specific fields in that document.

An example layer could look like this:

![](/img/protocol/12.png)

This event will add a layer to the client with id "portfolio-token-balance-layer".

The client will process this layer and add or overwrite two documents in the "tokenBalances" collection.

## UI Schema

There are two special collection names understood by the client: "menus" and "pages".

Each document in the "menus" collection will be rendered as a menu item in the EarnKeeper.io menu.

Each document in the "pages" collection will be rendered as a page when the user browses to the url specified in the document id.

An example event for setting the plugin menu structure is:

![](/img/protocol/7.png)

This will render the following menu:

![](/img/protocol/5.png)

The associated pages for these menu links could be emitted with the following event:

![](/img/protocol/11.png)

The element field of each "pages" document contains the UI schema for the page. The UI schema consists of a root component, in this case a "Container", which in turn has a children field containing further components.

The full specification for these components is here.

An example raw json component tree is here.

We have provided typescript helper interfaces and methods to build the component json structures, an example of using this is here.

## Further Reading

This space serves as a reference for the Earn Keeper Protocol which can be used to communicate between the EarnKeeper client and any back end service in any language.

To get started we recommend using our NestJs application generator located here.



