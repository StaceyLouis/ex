import styled from "styled-components";

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100%;
    max-height: 100vh;
    background-color: var(--bg);
    font-family: var(--font);
    color: var(--font);
`
export const Flex = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-center: center;
    align-items: center;
    align-content: center;
    margin-left: 4rem;
    width: 92vw;
`
export const Sect = styled.p`
    color: var(--p-color);
    width: 49%;
    font-size: 2rem;
    text-align: left;
`

export const Title = styled.h1`
    color: var(--green);
    font-size: 3rem;
`