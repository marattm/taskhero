
import binascii
import os
import sys

sys.exit(binascii.hexlify(os.urandom(24)))
