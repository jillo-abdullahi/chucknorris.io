import styled from "styled-components";
const Footer = () => {
  return (
    <FooterWrapper>
      <PoweredBy>
        Powered by{" "}
        <a href="https://api.chucknorris.io/" target="_blank" rel="noreferrer">
          chucknorris.io
        </a>
      </PoweredBy>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;

const PoweredBy = styled.div`
  font-weight: 500;
`;

export default Footer;
