import styled, { keyframes } from "styled-components";

const SkeletonLoader = ({ width, margin, height }) => (
  <Skeleton width={width} margin={margin} height={height}>
    content
  </Skeleton>
);

const load = keyframes`
    from {left: -200px;}
    to {left: 100%;}
`;

const Skeleton = styled.div`
  background: #f2f2f2;
  color: #f2f2f2;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.width ? props.width : "100px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  height: ${(props) => (props.height ? props.height : "auto")};

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 100%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export default SkeletonLoader;
