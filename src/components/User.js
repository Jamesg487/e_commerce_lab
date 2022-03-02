import styled from 'styled-components';

const Name = styled.h3`
   text-align: right;
   margin: 0;
   padding: 1em;
   font-size: 1.5em;
   background-color: cornflowerblue;
   color: #fff;
`
const Email = styled(Name)`
    font-size: 1em;
    padding-top: 0;
`

const User = ({user}) => {

return (
    <>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
    </>
)

}

export default User;