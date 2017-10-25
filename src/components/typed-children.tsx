import { h, VNode } from 'preact'
import { Link, Route } from 'react-router-dom'

namespace OneChildConstraint {
  type Props = {
    children: JSX.Element
  }

  const MyComponent = (props: Props) => {
    // implementation...
    return <div>Hello {props.children}</div>
  }

  // Not allowed! You must have children.
  // const out1 = <MyComponent />

  // Not ok! We have multiple element children.
  // const out2 = (
  //   <MyComponent>
  //     <div />
  //     <div />
  //     <div />
  //   </MyComponent>
  // )

  // This is ok. We have a single element child.
  const out3 = (
    <MyComponent>
      <div />
    </MyComponent>
  )
}

namespace MulitpleChildrenConstraint {
  type Props = {
    children: JSX.Element[]
  }

  const MyComponent = (props: Props) => {
    // implementation...
    return <div>Hello {props.children}</div>
  }

  // Not allowed! You must have multiple children.
  // const out1 = <MyComponent />

  // This is not ok. We have only single element child.
  // const out3 = (
  //   <MyComponent>
  //     <div />
  //   </MyComponent>
  // )

  // Ok! We have multiple element children.
  const out2 = (
    <MyComponent>
      <div />
      <div />
      <div />
    </MyComponent>
  )
}

namespace PrimitiveChildren {
  type Prop = {
    a: number
    b: string
    children: string | JSX.Element
  }

  const Comp = (p: Prop) => <div>{p.b}</div>

  // Error: missing children
  // const k = <Comp a={10} b="hi" />

  // Error: type not match
  // For this to work, "children: Array<string | JSX.Element>"
  // let k1 = (
  //   <Comp a={10} b="hi">
  //     <h2>Hello</h2> "hi"
  //   </Comp>
  // )

  // OK
  let k1 = (
    <Comp a={10} b="hi">
      <h2>Hello</h2>
    </Comp>
  )

  type Prop2 = {
    a: number
    b: string
    children: Array<string | JSX.Element>
  }
  const Comp2 = (p: Prop2) => <div>{p.b}</div>
  let k2 = (
    <Comp2 a={10} b="hi">
      <h2>Hello</h2> "hi"
    </Comp2>
  )
}

namespace FunctionChildren {
  type Props = {
    children: (data: { foo: string }) => JSX.Element
  }

  const MyComponent = (props: Props) => {
    const data = {
      foo: 'use type system Luke',
    }
    // implementation...
    return (
      <div>
        <h1>Functional children</h1>
        {props.children(data)}
      </div>
    )
  }

  const testChildren = <MyComponent>{({ foo }) => <div>{foo}</div>}</MyComponent>

  const to = '/some/path'
  const rest = {}

  const testRoute = (
    <Route path={to}>
      {({ match }) => (
        <li className={match ? 'active' : ''}>
          <Link to={to} {...rest} />
        </li>
      )}
    </Route>
  )
}
