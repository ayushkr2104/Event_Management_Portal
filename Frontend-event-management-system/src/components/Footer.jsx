import styled from 'styled-components';

      const FooterContainer = styled.footer`
        background-color: #1f2937;
        color: white;
        padding: 1rem;
        text-align: center;
      `;

      const Text = styled.p`
        margin: 0;
        font-size: 0.875rem;
      `;

      function Footer() {
        return (
          <FooterContainer>
            <Text>&copy; 2025 EventSync. All rights reserved.</Text>
          </FooterContainer>
        );
      }

      export default Footer;