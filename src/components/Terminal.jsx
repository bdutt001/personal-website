import './terminal.css';

import { useEffect, useRef, useState } from "react"
import TypingText from "./TypingText"

export default function Terminal() {
    const [input, setInput] = useState("")
    const terminalRef = useRef(null)


    const [lines, setLines] = useState([
        {
            id: "boot-command",
            type: "command",
            text: "hello",
            animate: true,
        }
    ])

    const [bootComplete, setBootComplete] = useState(false)

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }, [lines])


    useEffect(() => {
        
        const welcomeTimer = setTimeout(() => {
            setLines(prev => [
                ...prev,
                {
                    id: "welcome-message",
                    type: "welcome",
                }
            ])

            setBootComplete(true)
        }, 2000)        

        return () => {
            clearTimeout(welcomeTimer)
        }

    }, [])

    const handleCommand = (command) => {
        const trimmed = command.trim()

        if (!trimmed) return

        const newLines = [
            {
                id: crypto.randomUUID(),
                type: "command",
                text: trimmed,
                animate: false,
            }
        ]

        switch (trimmed.toLowerCase()) {

            case "help":
                newLines.push({
                    id: crypto.randomUUID(),
                    type: "help",
                })
                break

            case "contact":
                newLines.push({
                    id: crypto.randomUUID(),
                    type: "contact"
                })
                break

            case "projects":
                newLines.push({
                    id: crypto.randomUUID(),
                    type: "text",
                    text: "Open source tools, web apps, and systems programming."
                })
                break

            case "fastfetch","stack":
                newLines.push({
                    id: crypto.randomUUID(),
                    type: "fastfetch",
                })
                break
            

            case "clear":
                setLines([])
                setInput("")
                return

            default:
                newLines.push({
                    id: crypto.randomUUID(),
                    type: "text",
                    text: `command not found: ${trimmed}`
                })
        }

        setLines(prev => [...prev, ...newLines])

        setInput("")
    }

    return (
        <div className="terminal" ref={terminalRef}>

            {lines.map((line) => {
                if (line.type === "command") {
                    return (
                        <div
                            key={line.id}
                            className="trow nowrap"
                        >
                            <p className="white">
                                [ben@studio ~]$&nbsp;
                            </p>

                            {line.animate ? (
                                <TypingText text={line.text} />
                            ) : (
                                <p>{line.text}</p>
                            )}
                        </div>
                    )
                }
                if (line.type === "welcome") {
                    return (
                        <div
                            key={line.id}
                            className="terminal-welcome"
                        >
                            <pre className="ascii-2 gradient">
{`                          ████                                            
                         ░░███                                            
 █████ ███ █████  ██████  ░███   ██████   ██████  █████████████    ██████ 
░░███ ░███░░███  ███░░███ ░███  ███░░███ ███░░███░░███░░███░░███  ███░░███
 ░███ ░███ ░███ ░███████  ░███ ░███ ░░░ ░███ ░███ ░███ ░███ ░███ ░███████ 
 ░░███████████  ░███░░░   ░███ ░███  ███░███ ░███ ░███ ░███ ░███ ░███░░░  
  ░░████░████   ░░██████  █████░░██████ ░░██████  █████░███ █████░░██████ 
   ░░░░ ░░░░     ░░░░░░  ░░░░░  ░░░░░░   ░░░░░░  ░░░░░ ░░░ ░░░░░  ░░░░░░  `}
                            </pre>
                            <p className="center white">
                                Welcome to my portfolio.
                            </p>
                            

                            <p>
                                Enter <span className="accent">help</span> to view commands.
                            </p>
                        </div>
                    )
                }

                if (line.type === "contact") {
                    return (
                        <div key={line.id}>
                            <div className="help">
                                <div>
                                    <p>Email:</p>
                                    <p>Phone:</p>
                                </div>
                                <div>
                                    <p>bendutton9@gmail.com</p>
                                    <p>(757) 567-4771</p>
                                </div>
                            </div>
                        </div>
                    )
                }

                if (line.type === "help") {
                    return (
                        <div key={line.id}>
                            
                            <p>Available commands: </p>
                            <div className="help">
                                <div>
                                    
                                    <p className="accent">clear</p>
                                    <p className="accent">contact</p>
                                    <p className="accent">stack</p>
                                    <p className="accent">help</p>
                                </div>
                                <div>
                                    <p>clear terminal history</p>
                                    <p>view contact information</p>
                                    <p>view development environment and tools</p>
                                    <p>view available commands</p>
                                </div>
                            
                            </div>
                        </div>
                    )
                }

                if (line.type === "fastfetch") {
                    return (
                        <div key={line.id}>
                            <div>
                            <div className="row">
                                <pre className="ascii">
                                    <span className="white">{`
                                                         .###+.
                                                       +##+   o+ 
                                                     o###       +
                                                     ###
                                                     `}</span>
                                                 {` `}<span className="white">{`'#`}</span>{`    ooooo.
                                                 `}
                                                 <span className="white">{`+###+`}</span> {`   ooo.  .oo
                                                `}
                                                <span className="white">{`#######`}</span>{`  ooo      ooo   `}<span className="white">{`
                                               ######### `}</span>{`.o'      'oooo. `}
                                              <span className="white">{`
                                              .#########.`}</span> o. <span className="white">{`####`}</span>{` .oooooo.`}
                                              <span className="white">{`
                                              o#########+`}</span>{` o. `}<span className="white">{`####`}</span>{` .oooooooo.     `}
                                              <span className="white">{`
                                              +#########+ `}</span>{`oo      oooooooooo.  `}
                                              <span className="white">{`
                                              .#########o`}</span>{` ooo   .oooooooooooo.  `}
                                              <span className="white">{`
                                               ######### `}</span>{`.oooooooooooooooooooo `}
                                               <span className="white">{`
                                                ####### `}</span>{` ooooooooooooooooooooo   `}
                                                {`
                                             `}{`.o`}<span className="white">{`  ##### `}</span>{`  ooo~~ooooooooooo'''
                                            .ooo       oooo.
                                           .ooooo.. .ooooooooo..         ...
                                          .ooooooooooooooooooooooooooooooo.
                                         .ooooooooooooooooooooooooooooooo
                                         oooooooo.  .oooooooooooooooooo
                                        ooooooo   ..   oooooooooo..
                                       .ooooo  .oooooo  ooooooooo.
                                       ooooo .ooooooooo ooooooooooo      `}<span className="white">{` oooooooooooooooooo `}  </span> {`
                                      oooo. ooooooooooo .ooooooooo.      `}<span className="white">{`+################## `}  </span> {`
                                      ooo..oooooooooooo .ooooooooo       `}<span className="white">{`##################   `}  </span> {`
                                     .ooooooooooooooooo ooooooooo       `}<span className="white">{`+##################                   `}  </span> {`
                                     ooooooooooooooooo. oooooooo.       `}<span className="white">{`##################.                          `}  </span> {`
                                     ooooooooooooooooo .o.ooo..        `}<span className="white">{`o##################                           `}  </span> {`
                                     oooooooooooooooo .oo              `}<span className="white">{`##################o                           `}  </span> {`
                                     oooooooooooooo.  oooo...oooo.    `}<span className="white">{`o##################                            `}  </span> {`
                                      ooooooooooo.    oooooooooo      `}<span className="white">{`##################o                            `}  </span> {`
                                      .oooo..          oooooo. .     `}<span className="white">{`o##################                             `}  </span> {`
                                       .oooo....                     `}<span className="white">{`##################o                             `}  </span> {`
                                         oooooooo....
                                           ..ooooo.        `}<span className="white">{`############################   `}</span>
                                </pre>
                                <div className="fetch">
                                    <div>
                                        <p className="accent">
                                            ben<span className="white">@</span>studio
                                        </p>
                                    </div>
                                    <div>
                                        <p className="white">----------------</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">OS:</p>
                                        <p className="white">Arch Linux</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Editor:</p>
                                        <p className="white">Vim</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Shell:</p>
                                        <p className="white">Bash</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Frontend:</p>
                                        <p className="white">React, CSS</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Backend:</p>
                                        <p className="white">Node.js, Express</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Database:</p>
                                        <p className="white">PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    )
                }

                if (line.type === "text") {
                    return (
                        <p
                            key={line.id}
                            className="white"
                        >
                            {line.text}
                        </p>
                    )
                }

                return null
            })}

            {bootComplete && (
                <div className="trow nowrap terminal-input-line">
                    <p className="white">
                        [ben@studio ~]$&nbsp;
                    </p>

                    <input
                        className="terminal-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleCommand(input)
                            }
                        }}
                        autoFocus
                        spellCheck={false}
                    />
                </div>
            )}
        </div>
    )
}