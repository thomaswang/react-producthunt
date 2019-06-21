import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'https://api.producthunt.com/v2/api/graphql/',
  headers: {
    Authorization: `Bearer ${'a85479b5bd1fe16af06d8934fe82e518ec3e60f3cf963b44d28f718a72c52583'}`
  }
})

const BadgeMetadata = ({ username, darkMode = false }) => (
  <Query
    query={gql`
      {
        user(username: ${username}) {
          id
          username
          url
          name
          profileImage(size: 200)
          isMaker
          madePosts {
            totalCount
          }
          submittedPosts {
            totalCount
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>{error.toString()}!</p>

      return (
        <Wrapper href={data.user.url} darkMode={darkMode}>
          <Avatar image={data.user.profileImage}>
            {data.user.isMaker && (
              <Maker>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <circle id='a' cx='7' cy='7' r='7' />
                  </defs>
                  <g fill='#00B27F' fillRule='evenodd'>
                    <g transform='translate(1 1)'>
                      <circle stroke='#FFF' cx='7' cy='7' r='7.5' />
                    </g>
                    <path
                      fill='#FFF'
                      d='M11 10.8V5.2H9.606l-1.57 3.764h-.071L6.398 5.2H5v5.6h1.1V7.055h.062l1.445 3.423h.79l1.44-3.423h.064V10.8z'
                    />
                  </g>
                </svg>
              </Maker>
            )}
          </Avatar>
          <Name>{data.user.name}</Name>
          <Username>@{data.user.username}</Username>
          <Text>
            Submitted <b>{data.user.submittedPosts.totalCount}</b> products
          </Text>
          <Text>
            Made <b>{data.user.madePosts.totalCount}</b> products
          </Text>
          <Logo
            src={
              darkMode
                ? 'https://www.dropbox.com/s/oijqoirjuzxphxx/product-hunt-logo-horizontal-orange.svg?raw=1'
                : 'https://www.dropbox.com/s/szbmcerj2tyshi4/product-hunt-logo-horizontal-black.svg?raw=1'
            }
          />
        </Wrapper>
      )
    }}
  </Query>
)

BadgeMetadata.propTypes = {
  username: PropTypes.string,
  darkMode: PropTypes.boolean
}

const Badge = ({ username, darkMode }) => (
  <ApolloProvider client={client}>
    <BadgeMetadata username={username} darkMode={darkMode} />
  </ApolloProvider>
)

Badge.propTypes = {
  username: PropTypes.string,
  darkMode: PropTypes.boolean
}

export default Badge

const Wrapper = styled.a`
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  box-shadow: ${props =>
    props.darkMode
      ? 'rgba(0, 0, 0, 0.25)'
      : 'rgba(198, 208, 235, 0.5) 0px 5px 10px'};
  padding: 30px;
  background: ${props => (props.darkMode ? '#1B1E22' : 'white')};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgb(198, 208, 235)'};
  border-image: initial;
  border-radius: 20px;
  max-width: 300px;
  min-height: 200px;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  h3,
  h4,
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h3 {
    color: ${props => (props.darkMode ? 'white' : 'black')};
  }

  p {
    color: ${props => (props.darkMode ? '#E8E8E8' : 'black')};
  }

  &:hover {
    box-shadow: 0px 15px 30px
      ${props =>
    props.darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(198, 208, 235, 1)'};
    transform: translateY(-5px);
  }
`

const Avatar = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-bottom: 16px;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`

const Maker = styled.span`
  svg {
    width: 24px;
    height: 24px;
  }
`

const Name = styled.h3`
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin: 0;
`

const Username = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #97a4b8;
  margin-top: 4px;
  margin-bottom: 24px;
  text-align: center;
`

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0;
`

const Logo = styled.img`
  width: 55%;
  margin: 0 auto;
  margin-top: 24px;
`
