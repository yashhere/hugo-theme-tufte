# Theme components

This theme is composed of the base theme "tufte", and other hugo modules.

To use this theme, you need to pull this theme as Hugo module

```bash
hugo mod init github.com/me-me-me/my-hugo-project
```

Add following to your site's `config.yaml` file -

```yaml
module:
  imports:
  - path: github.com/yashhere/hugo-theme-tufte
```

And, remove `theme` config option from your configuration file.

## Shortcodes

### Aside

```go
{{< aside "heading"="Example" >}}
This is an ASIDE Example.
{{< /aside >}}
```

### Epigraph

> Enable MathJax if using Math

```go
{{< epigraph pre="Author Writer, " cite="Math is Fun" >}}
    When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
    $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
{{< /epigraph >}}
```

### Mermaid

```go
{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}
```

### Span

```go
{{< span class="newthought">}}
  hello
{{< span "end" >}}
```

### Blockquote

##### Normal quote:

```go
{{< blockquote >}}
  This is a simple quote.
{{< /blockquote >}}
```

#### Quote with author

```go
{{< blockquote author="Author2" >}}
  This is a quote with only an Author named Author2.
{{< /blockquote >}}
```

#### Quote with author and source

```go
{{< blockquote author="Author3" source="Source" >}}
  This is a quote from Author3 and source "source."
{{< /blockquote >}}
```

#### Quote with author and link

```go
{{< blockquote author="Author4" link="https://www.google.com" >}}
  This is a quote from Author4 and links to https://www.google.com.
{{< /blockquote >}}
```

#### Quote with author, link and title

```go
{{< blockquote author="Author5" link="https://www.google.com" title="Google" >}}
  This is a quote from Author5 and links to https://www.google.com with title "Google."
{{< /blockquote >}}
```

#### Quote with author and a link longer than 32 characters, string is first cut at 32 characters then everything after the last forward slash is removed

```go
{{< blockquote author="Author6" link="https://twitter.com/CryptoGangsta/status/716427930126196737" >}}
  This is a quote from Author5 and links to https://twitter.com/CryptoGangsta/status/716427930126196737 which is longer than 32 characters.
  <br>And this is a new line in the quote with the HTML br tag.
{{< /blockquote >}}
```

#### Test from the Octopress blockquote page at: http://octopress.org/docs/plugins/blockquote/

```go
{{< blockquote author="@allanbranch" link="https://twitter.com/allanbranch/status/90766146063712256" >}}
  Over the past 24 hours I've been reflecting on my life & I've realized only one thing. I need a medieval battle axe.
{{< /blockquote >}}
```

### Sidenote

```go
{{< sidenote >}}I'll explain it using a small sample of five people. We assume that, initially, none of these people is infected. Now, because of some external factors{{< /sidenote >}}
```

### Marginnote

```go
{{< marginnote >}} by periodically selecting some peer nodes from the network. If a node is susceptible, that is, it does not know the said information, then after the selection and transmission of  information by an infected node, the susceptible node also gets infected and starts spreading the information.{{< /marginnote >}}
```

### Callout

```go
{{< callout "emoji"="😃" >}}
  Hugo is a static HTML and CSS website generator written in Go. It is optimized for speed, ease of use, and configurability. Hugo takes a directory with content and templates and renders them into a full HTML website.
{{< /callout >}}
```

### Code

```go
{{< code cpp >}}
// Your First C++ Program

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
{{< /code >}}
```

### Highlight

```go
{{< highlight bash >}}
sudo visudo
{{< /highlight >}}
```

### Wikipedia

```go
{{< wikipedia tag="VIC_cipher" >}}
{{< wikipedia tag="VIC_cipher" lang="fr" >}}
{{< wikipedia tag="VIC_cipher" lang="fr" title="" >}}
{{< wikipedia tag="VIC_cipher" title="VIC Cipher" >}}
{{< wikipedia tag="VIC_cipher" lang="en" title="VIC Cipher" >}}
```
