import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>© 2024 Arun Jawlia. All rights reserved.</FooterText>
                <SocialLinks>
                    <a href="https://www.linkedin.com/in/arun-jawlia-0a262022b" target="_blank" rel="noreferrer">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a href="https://github.com/Arun-Jawlia" target="_blank" rel="noreferrer">
                        <GitHubIcon fontSize="large" />
                    </a>
                    {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
                        <TwitterIcon fontSize="large" />
                    </a> */}
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer">
                        <FacebookIcon fontSize="large" />
                    </a>
                </SocialLinks>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    width: 100%;
    background-color: #282c34;
    color: white;
    padding: 20px 0;
    display: flex;
    justify-content: center;
`;

const FooterContent = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 14px;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 10px;

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: #01a479;
    }
`;

export default Footer;
