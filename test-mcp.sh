#!/bin/bash

# 测试 MCP 服务器的所有工具，以 data-table 为例

echo "=========================================="
echo "测试 Naive UI MCP 服务器"
echo "=========================================="
echo ""

# 1. 测试 list_components
echo "1. list_components - 列出所有组件"
echo "------------------------------------------"
echo '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"list_components","arguments":{}}}' | node dist/index.js 2>/dev/null | python3 -c "import sys, json; data=json.load(sys.stdin); print(data['result']['content'][0]['text'])" | head -20
echo "..."
echo ""

# 2. 测试 get_api
echo "2. get_api - 获取 data-table 的 API 文档"
echo "------------------------------------------"
echo '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"get_api","arguments":{"component":"data-table"}}}' | node dist/index.js 2>/dev/null | python3 -c "import sys, json; data=json.load(sys.stdin); print(data['result']['content'][0]['text'])" | head -50
echo "..."
echo ""

# 3. 测试 list_examples
echo "3. list_examples - 列出 data-table 的所有示例"
echo "------------------------------------------"
echo '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"list_examples","arguments":{"component":"data-table"}}}' | node dist/index.js 2>/dev/null | python3 -c "import sys, json; data=json.load(sys.stdin); print(data['result']['content'][0]['text'])" | head -30
echo "..."
echo ""

# 4. 测试 get_example
echo "4. get_example - 获取 data-table 的 '基础用法' 示例"
echo "------------------------------------------"
echo '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"get_example","arguments":{"component":"data-table","title":"基础用法"}}}' | node dist/index.js 2>/dev/null | python3 -c "import sys, json; data=json.load(sys.stdin); print(data['result']['content'][0]['text'])"
echo "..."
echo ""

echo "=========================================="
echo "测试完成"
echo "=========================================="
