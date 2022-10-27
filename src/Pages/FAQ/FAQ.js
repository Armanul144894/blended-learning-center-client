import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="my-5 container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is javascript?</Accordion.Header>
          <Accordion.Body>
            Javascript is used by programmers across the world to create dynamic
            and interactive web content like applications and browsers.
            JavaScript is so popular that it's the most used programming
            language in the world, used as a client-side programming language by
            97.0% of all websites
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What exactly is a node?</Accordion.Header>
          <Accordion.Body>
            A node is a basic unit of a data structure, such as a linked list or
            tree data structure. Nodes contain data and also may link to other
            nodes. Links between nodes are often implemented by pointers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is React and why use it?</Accordion.Header>
          <Accordion.Body>
            React is a JavaScript library developed by Facebook which, among
            other things, was used to build Instagram.com. Its aim is to allow
            developers to easily create fast user interfaces for websites and
            applications alike. The main concept of React. js is virtual DOM.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is MongoDB and why it is used?
          </Accordion.Header>
          <Accordion.Body>
            MongoDB is an open source NoSQL database management program. NoSQL
            is used as an alternative to traditional relational databases. NoSQL
            databases are quite useful for working with large sets of
            distributed data. MongoDB is a tool that can manage
            document-oriented information, store or retrieve information.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
