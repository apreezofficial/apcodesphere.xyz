$startDate = Get-Date -Year 2026 -Month 6 -Day 1
$endDate = Get-Date -Year 2026 -Month 6 -Day 22
$currentDate = $startDate
$repoPath = "c:\Users\UCHENNA\Desktop\new-portfolio\my-lack-only-portfolio"

while ($currentDate -le $endDate) {
    $dateStr = $currentDate.ToString("yyyy-MM-ddTHH:mm:ss")
    $commitMsg = "Update demo file ($($currentDate.ToString("yyyy-MM-dd")))"
    
    # Update demo.md with new content
    Add-Content -Path "$repoPath\demo.md" -Value "`nUpdated on $($currentDate.ToString("yyyy-MM-dd"))"
    
    # Add and commit
    Set-Location -Path $repoPath
    git add demo.md
    $env:GIT_COMMITTER_DATE = $dateStr
    git commit --date=$dateStr -m $commitMsg
    
    # Move to next day
    $currentDate = $currentDate.AddDays(1)
}

Write-Host "All commits created successfully!"
