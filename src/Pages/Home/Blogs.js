import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>1. How will you improve the performance of a React Application?</h1>
      <p>
        Ans: We can keeping component state local where necessary and also
        Memoizing React components to prevent unnecessary re-renders for
        improving the performance of a react Application{" "}
      </p>
      <h1>
        2. What are the different ways to manage a state in a React application?
      </h1>
      <p>
        Ans: There are four types of react state to manage.- local state, global
        state, server state, URL state{" "}
      </p>
      <h1>3. How does prototypical inheritance work?</h1>
      <p>
        Ans: The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object.{" "}
      </p>
      <h1>
        4. Why you do not set the state directly in React. For example, if you
        have const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h1>
      <p>
        Ans: One should never update the state directly because of the following
        reasons: If you update it directly, calling the setState() afterward may
        just replace the update you made. When you directly update the state, it
        does not change this.state immediately. Instead, it creates a pending
        state transition, and accessing it after calling this method will only
        return the present value. You will lose control of the state across all
        components.
      </p>
      <h1>
        5. What is a unit test? Why should write unit tests?
      </h1>
      <p>
        Ans: nit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code.
      </p>
    </div>
  );
};

export default Blogs;
