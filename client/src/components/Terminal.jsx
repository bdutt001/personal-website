import { useEffect, useState } from "react"
import TypingText from "./TypingText"

export default function Terminal() {
    const [input, setInput] = useState("")

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
                const commands = [
                    "help:       list available commands",
                    "about:      learn more about me",
                    "projects:   view featured projects",
                    "skills:     view technical skills",
                    "contact:   contact information",
                    "fastfetch:  system information",
                    "clear:      clear terminal history",
                ]

                commands.forEach((command) => {
                    newLines.push({
                        id: crypto.randomUUID(),
                        type: "text",
                        text: command,
                    })
                })

                break

            case "about":
                newLines.push({
                    id: crypto.randomUUID(),
                    type: "text",
                    text: "Software developer based in Chesapeake, Virginia."
                })
                break

            case "projects":
                newLines.push({
                    id: crypto.randomUUID(),
                    type: "text",
                    text: "Open source tools, web apps, and systems programming."
                })
                break

            case "fastfetch":
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
        <div className="terminal">

            {lines.map((line) => {
                if (line.type === "command") {
                    return (
                        <div
                            key={line.id}
                            className="trow nowrap"
                        >
                            <p className="accent">
                                ben@studio
                                <span className="white">:~$ </span>
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
{`                                                  ████                                            
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
                            <p className="center white">
                                I am a software developer based in Chesapeake, Virginia.
                            </p>

                            <p>
                                Type <span className="accent">help</span> to view commands.
                            </p>
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
                                                       +##+   -+ 
                                                     -###       +
                                                     ###
                                                     `}</span>
                                                 {` `}<span className="white">{`'#`}</span>{`    -----.
                                                 `}
                                                 <span className="white">{`+###+`}</span> {`   ---.  .--
                                                `}
                                                <span className="white">{`#######`}</span>{`  ---      ---   `}<span className="white">{`
                                               ######### `}</span>{`.-.      .----. `}
                                              <span className="white">{`
                                              .#########.`}</span> -. <span className="white">{`####`}</span>{` .------.`}
                                              <span className="white">{`
                                              -#########+`}</span>{` -. `}<span className="white">{`####`}</span>{` .--------.     `}
                                              <span className="white">{`
                                              +#########+ `}</span>{`--      ----------.  `}
                                              <span className="white">{`
                                              .#########-`}</span>{` ---   .------------.  `}
                                              <span className="white">{`
                                               ######### `}</span>{`.-------------------- `}
                                               <span className="white">{`
                                                ####### `}</span>{` ---------------------   `}
                                                <span className="white">{`
                                             .-  ##### `}</span>{`  ---..-----------'''
                                            .---       ----.
                                           .-----.. .---------..         ...
                                          .-------------------------------.
                                         .-------------------------------
                                         --------.  .------------------
                                        -------   ..   ----------..
                                       .-----  .------  ---------.
                                       ----- .--------- -----------      `}<span className="white">{` ------------------ `}  </span> {`
                                      ----. ----------- .---------.      `}<span className="white">{`+################## `}  </span> {`
                                      ---..------------ .---------       `}<span className="white">{`##################   `}  </span> {`
                                     .----------------- ---------       `}<span className="white">{`+##################                   `}  </span> {`
                                     -----------------. --------.       `}<span className="white">{`##################.                          `}  </span> {`
                                     ----------------- .-.---..        `}<span className="white">{`-##################                           `}  </span> {`
                                     ---------------- .--              `}<span className="white">{`##################-                           `}  </span> {`
                                     --------------.  ----...----.    `}<span className="white">{`-##################                            `}  </span> {`
                                      -----------.    ----------      `}<span className="white">{`##################-                            `}  </span> {`
                                      .----..          ------. .     `}<span className="white">{`-##################                             `}  </span> {`
                                       .----....                     `}<span className="white">{`##################-                             `}  </span> {`
                                         --------....
                                           ..-----.        `}<span className="white">{`############################   `}</span>
                                </pre>
                                <div className="fetch">
                                    <div>
                                        <p><span className="accent">ben</span><span className="white">@</span><span className="accent">studio</span></p>
                                    </div>
                                    <div>
                                        <p className="white">----------------</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Editor:</p>
                                        <p className="white">VS Code</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">OS:</p>
                                        <p className="white">Arch Linux</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Editor:</p>
                                        <p className="white">VS Code</p>
                                    </div>
                                    <div className="trow nowrap">
                                        <p className="accent">Tech Stack:</p>
                                        <p className="white">React, Node.js, PostgreSQL</p>
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
                    <p className="accent">
                        ben@studio
                        <span className="white">:~$ </span>
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