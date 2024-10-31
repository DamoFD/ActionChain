interface IconProps {
    className?: string
}

export const FlowIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-3.935 1.779A4.001 4.001 0 0 1 22 8a4 4 0 0 1-7.92.8a1.75 1.75 0 0 0-1.33 1.7v3a3.25 3.25 0 0 1-2.815 3.221A4.001 4.001 0 1 1 9.92 15.2a1.75 1.75 0 0 0 1.33-1.699v-3a3.25 3.25 0 0 1 2.815-3.221M6 13.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"/></svg>
    );
}

export const ListIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M10 14H3m7 4H3"/><path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"/><path d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"/></g></svg>
    );
}

export const IssueIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8"/></svg>
    );
}

export const PlugIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M15.354.646a.5.5 0 0 0-.707 0l-2.07 2.07c-1.37-.999-3.37-.843-4.64.428l-.13.131a1.25 1.25 0 0 0 0 1.768l3.181 3.182c.243.244.563.366.884.366s.641-.122.884-.366l.22-.22a3.47 3.47 0 0 0 1.025-2.529a3.46 3.46 0 0 0-.71-2.059l2.063-2.063a.5.5 0 0 0 0-.708m-3.086 6.651l-.22.22a.25.25 0 0 1-.354 0L8.512 4.335a.25.25 0 0 1 0-.354l.131-.131a2.7 2.7 0 0 1 1.897-.79c.61 0 1.211.214 1.671.648c.498.468.777 1.101.788 1.783a2.48 2.48 0 0 1-.73 1.806M8.146 9.146l-.88.88l-1.293-1.293l.88-.88a.5.5 0 0 0-.707-.707l-.88.88l-.253-.253a1.253 1.253 0 0 0-1.768.001l-.22.22A3.47 3.47 0 0 0 2 10.523c.012.756.26 1.47.71 2.059L.647 14.645a.5.5 0 0 0 .708.707l2.07-2.07a3.45 3.45 0 0 0 2.036.652c.938 0 1.888-.363 2.604-1.08l.131-.131a1.25 1.25 0 0 0 0-1.768l-.222-.222l.88-.88a.5.5 0 0 0-.707-.707m-.657 2.872l-.132.131c-.994.995-2.596 1.059-3.568.142a2.48 2.48 0 0 1-.788-1.783c-.01-.682.25-1.324.732-1.806l.22-.22a.25.25 0 0 1 .177-.073c.065 0 .128.024.177.073l3.18 3.18a.25.25 0 0 1 0 .354z"/></svg>
    );
}

export const SettingsIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11 11 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.5 11.5 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11 11 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.5 11.5 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.9 8.9 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.4 9.4 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.9 8.9 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.4 9.4 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"/><path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"/></svg>
    );
}

export const HelpIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
    );
}

export const DocumentIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-4 -2 24 24"><path fill="currentColor" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2m0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2"/></svg>
    );
}

export const CaretSortIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0m-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32"/></svg>
    );
}
