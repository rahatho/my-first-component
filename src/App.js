import { useState, useEffect } from "react";
import StoryTray from "./StoryTray";

let initialStories = [
    {id: 0, label: "Ankit's Story"},
    {id: 1, label: "Taylor's Story"},
];

export default function App() {
    let [stories, setStories] = useState([...initialStories]);
    let time = useTime();

    // HACK: Prevent the memory from growing forever while you read docs.
    // We're breaking our own rules here.


}