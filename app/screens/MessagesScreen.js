import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Essy",
    description: "Hey Lindiwe, I would like to buy Jean Paul Gaultiers from your shop.",
    image: require("../assets/essy1.jpg"),
  },
  {
    id: 2,
    title: "Lindiwe",
    description: "We have in stock Jean Paul Gaultiers, selling at k2500. ",
    image: require("../assets/sis1.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T",
              description: "D2",
              image: require("../assets/sis1.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}



export default MessagesScreen;
