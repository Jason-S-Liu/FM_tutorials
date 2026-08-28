# 第一节实质课程 PPT

## 文件

- `lecture01_continuum_assumption.tex`：Beamer 源码，使用 `../beamerthemeblei-main/beamerthemeblei.sty` 模板。
- `build_windows.ps1`：Windows PowerShell 编译脚本。

## Windows 编译

在本目录打开 PowerShell，运行：

```powershell
.\build_windows.ps1
```

如果 PowerShell 执行策略阻止脚本运行，可改用：

```powershell
powershell -ExecutionPolicy Bypass -File .\build_windows.ps1
```

脚本会优先使用 `latexmk -xelatex`；如果没有 `latexmk`，则自动调用两次 `xelatex`。

