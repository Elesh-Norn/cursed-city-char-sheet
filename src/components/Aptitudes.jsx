import Row from "react-bootstrap/Row";

export function Aptitude({ name, text }) {
  return (
    <div style={{ margin: "3px" }}>
      <b>{name}</b>: {text}
    </div>
  );
}

export function UniqueAptitudes(props) {
  return (
    <>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <h4>APTITUDES UNIQUES</h4>
      </Row>
      <Row>{props.children}</Row>
    </>
  );
}
