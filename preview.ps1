<#
.SYNOPSIS
  Zero-dependency local HTTP preview server for the Dharan SEO Consultancy static site.
.USAGE
  powershell -ExecutionPolicy Bypass -File .\preview.ps1
  Then open http://localhost:8080/ in your browser.
#>
param(
    [int]$Port = 8080
)

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Listener = New-Object System.Net.HttpListener
$Prefix = "http://localhost:$Port/"
$Listener.Prefixes.Add($Prefix)
$Listener.Start()

Write-Host "Serving $Root at $Prefix" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

$MimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.svg'  = 'image/svg+xml'
    '.xml'  = 'application/xml; charset=utf-8'
    '.txt'  = 'text/plain; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.webmanifest' = 'application/manifest+json; charset=utf-8'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.webp' = 'image/webp'
    '.ico'  = 'image/x-icon'
}

try {
    while ($Listener.IsListening) {
        $Context = $Listener.GetContext()
        $RequestPath = [System.Uri]::UnescapeDataString($Context.Request.Url.AbsolutePath)
        $RelativePath = $RequestPath.TrimStart('/') -replace '/', '\'
        $FullPath = Join-Path $Root $RelativePath

        if ((Test-Path $FullPath -PathType Container)) {
            $FullPath = Join-Path $FullPath 'index.html'
        } elseif (-not (Test-Path $FullPath -PathType Leaf)) {
            $AltPath = Join-Path $FullPath 'index.html'
            if (Test-Path $AltPath -PathType Leaf) {
                $FullPath = $AltPath
            }
        }

        $Response = $Context.Response
        if (Test-Path $FullPath -PathType Leaf) {
            $Ext = [System.IO.Path]::GetExtension($FullPath).ToLowerInvariant()
            $Response.ContentType = if ($MimeTypes.ContainsKey($Ext)) { $MimeTypes[$Ext] } else { 'application/octet-stream' }
            $Bytes = [System.IO.File]::ReadAllBytes($FullPath)
            $Response.StatusCode = 200
            $Response.ContentLength64 = $Bytes.Length
            $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
        } else {
            $Response.StatusCode = 404
            $NotFound = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>$RequestPath</p>")
            $Response.ContentType = 'text/html; charset=utf-8'
            $Response.ContentLength64 = $NotFound.Length
            $Response.OutputStream.Write($NotFound, 0, $NotFound.Length)
        }
        $Response.OutputStream.Close()
    }
} finally {
    $Listener.Stop()
}
