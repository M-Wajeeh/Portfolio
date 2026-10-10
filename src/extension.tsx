import React from 'react'
import ReactDOM from 'react-dom/client'
import ExtensionPage from './pages/ExtensionPage'
import ExtensionsIndex from './pages/ExtensionsIndex'
import './base'

/* One entry for the extension pages; the HTML file names which extension, or none for the index. */
const root = document.getElementById('root') as HTMLElement
const slug = root.dataset.slug

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        {slug ? <ExtensionPage slug={slug} /> : <ExtensionsIndex />}
    </React.StrictMode>,
)
