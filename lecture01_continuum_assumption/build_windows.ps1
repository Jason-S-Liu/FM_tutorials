$ErrorActionPreference = "Stop"

$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here

$tex = "lecture01_continuum_assumption.tex"

if (Get-Command latexmk -ErrorAction SilentlyContinue) {
  latexmk -xelatex -interaction=nonstopmode -halt-on-error $tex
} elseif (Get-Command xelatex -ErrorAction SilentlyContinue) {
  xelatex -interaction=nonstopmode -halt-on-error $tex
  xelatex -interaction=nonstopmode -halt-on-error $tex
} else {
  throw "No latexmk or xelatex found in PATH. Please install TeX Live or MiKTeX, or add it to PATH."
}
