import styled from 'styled-components/native';

export const StyledView = styled.View`
    background-color: papayawhip;
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const StyledText = styled.Text`
    padding: 10px;
    fontSize: 18px;
    height: 44px;
    color: ${props => props.title ? 'palevioletred' : '#666'};
`;