import re
import json

def parse_problems(filename):
    problems = []
    current_problem = {}
    
    # Patterns
    # <a href="/problems/two-sum" ... > - Use this to signal start of a new block
    start_pattern = re.compile(r'<a\s+[^>]*href="/problems/[^"]*"[^>]*>')
    
    # <div class="ellipsis line-clamp-1">1. Two Sum</div>
    # Captures Question ID (\d+) and Title (.*?)
    title_pattern = re.compile(r'<div class="ellipsis line-clamp-1">(\d+)\.\s+(.*?)</div>')
    
    # <p class="mx-0 text-[14px] text-sd-easy lc-xl:mx-4">Easy</p>
    level_pattern = re.compile(r'<p class="mx-0 text-\[14px\] text-sd-[a-z]+ lc-xl:mx-4">([a-zA-Z\.]+)</p>')
    
    try:
        print(f"Parsing {filename}...")
        with open(filename, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                
                # Check Start of Problem Block
                if start_pattern.search(line):
                    current_problem = {} # Reset for new problem
                    continue

                # Check ID and Title
                m_title = title_pattern.search(line)
                if m_title:
                    current_problem['id'] = m_title.group(1)
                    current_problem['title'] = m_title.group(2)
                    continue

                # Check Level
                m_level = level_pattern.search(line)
                if m_level:
                    # Only add if we have id and title captured
                    if 'id' in current_problem and 'title' in current_problem:
                        lvl = m_level.group(1)
                        if lvl == "Med.":
                            lvl = "Medium"
                        current_problem['level'] = lvl
                        
                        problems.append(current_problem)
                        current_problem = {} # Reset
                    continue
                    
        with open('problems.json', 'w') as out:
            json.dump({"problems": problems}, out, indent=2)
        print(f"Successfully created problems.json with {len(problems)} problems.")
        
    except FileNotFoundError:
        print(f"Error: File {filename} not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    parse_problems('problems.xml')
