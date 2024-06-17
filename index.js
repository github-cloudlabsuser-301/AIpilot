import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;
const reverseAndCapitalize = (sentence) => {
    const reversedSentence = sentence.split('').reverse().join('');
    const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    return capitalizedSentence;
};

const sentence = 'type markdown here';
const reversedAndCapitalizedSentence = reverseAndCapitalize(sentence);
console.log(reversedAndCapitalizedSentence);

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
const names = data.flatMap(group => group.map(person => person.name));
console.log(names);